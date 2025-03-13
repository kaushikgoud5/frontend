import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Message {
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ChatComponent {
  @ViewChild('chatContainer') private chatContainer!: ElementRef;
  
  messages: Message[] = [
    {
      content: "Hello! I'm your AI assistant. I can help you learn about the company. Feel free to upload documents or ask questions!",
      sender: 'bot',
      timestamp: new Date()
    }
  ];
  
  newMessage: string = '';
  isUploading: boolean = false;
  
  onFileSelected(event: any) {
    const files = event.target.files;
    if (files.length > 0) {
      this.isUploading = true;
      // Simulate file upload
      setTimeout(() => {
        this.messages.push({
          content: `Document "${files[0].name}" has been uploaded and processed successfully.`,
          sender: 'bot',
          timestamp: new Date()
        });
        this.isUploading = false;
        this.scrollToBottom();
      }, 2000);
    }
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({
        content: this.newMessage,
        sender: 'user',
        timestamp: new Date()
      });

      // Simulate bot response
      setTimeout(() => {
        this.messages.push({
          content: "I'm processing your request. In a real implementation, this would be handled by the AI backend.",
          sender: 'bot',
          timestamp: new Date()
        });
        this.scrollToBottom();
      }, 1000);

      this.newMessage = '';
      this.scrollToBottom();
    }
  }

  private scrollToBottom(): void {
    setTimeout(() => {
      try {
        this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
      } catch(err) {}
    }, 100);
  }
}