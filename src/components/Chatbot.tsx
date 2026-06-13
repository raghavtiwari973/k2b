import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Bot } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I am the K2B Gifting Assistant 🎁\n\nI can help you explore our collections (Premium, Standard, Regular), learn about our customization options, or provide contact details. What would you like to know?",
      sender: 'bot'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickReplies = [
    "Premium Collection",
    "Standard Gifts",
    "Bulk/Regular Orders",
    "Custom Branding",
    "Contact Info"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const generateResponse = (input: string) => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.match(/(premium|luxury|cxo|leader)/)) {
      return "Our **Premium Collection** is designed for Leadership, Clients & Special Recognition.\n\nCategories:\n• Executive Desk (Organizers, LED Clocks)\n• Technology (USB Drives, Power Banks, Charging Docks)\n• Sustainable Luxury (Bamboo, Eco Kits)\n• Curated Hampers (Festive, Wellness)\n\nIdeal for CXOs and Key Partners!";
    }
    if (lowerInput.match(/(standard|manager|associate)/)) {
      return "Our **Standard Collection** is Practical, Elegant, and Memorable.\n\nCategories:\n• Workspace Essentials (Pen stands, Desk organizers)\n• Technology (Digital Clocks, Mobile accessories)\n• Utility Gift Sets\n• Eco-Friendly Collection\n\nIdeal for Channel Partners & Corporate Events.";
    }
    if (lowerInput.match(/(regular|bulk|mass|event|employee)/)) {
      return "Our **Regular Collection** offers Smart Gifting for Large-Scale Engagements.\n\nCategories:\n• Office Essentials (Pens, Diaries, Mouse Pads)\n• Utility Products (USB Drives, Desk Accessories)\n• Event Giveaways (Conference Kits, Joining Kits)\n\nIdeal for Employee Engagement & Training Sessions.";
    }
    if (lowerInput.match(/(sustain|eco|green|bamboo|wooden)/)) {
      return "We have excellent **Sustainable** choices!\n\n• Bamboo Bottle Gift Sets\n• Premium Wooden Gift Sets\n• Eco-Friendly Executive Kits\n• Eco Stationery Kits\n\nPerfect for reflecting your commitment to sustainability.";
    }
    if (lowerInput.match(/(custom|brand|logo|personalize|engrav)/)) {
      return "Your Brand. Your Identity.\n\nWe offer complete **Customization**:\n• Logo Branding\n• Laser Engraving\n• Personalized Message Cards\n• Custom Packaging\n• Event-Specific Gifting Concepts\n• Festive & Seasonal Collections";
    }
    if (lowerInput.match(/(contact|phone|email|call|reach)/)) {
      return "We'd love to hear from you!\n\n📞 Phone: +91 8959817421\n📧 Email: key2brand360@gmail.com\n🌐 Website: www.key2brand.com";
    }
    if (lowerInput.match(/(why|about|who)/)) {
      return "At **K2B Gifting Solution**, we curate premium corporate gifting solutions that combine functionality, elegance, and personalization.\n\nWhy us?\n• Curated Product Selection\n• Custom Branding\n• End-to-End Execution\n• Corporate Expertise";
    }
    if (lowerInput.match(/(hi|hello|hey|start)/)) {
      return "Hello again! How can I assist you with your corporate gifting needs today?";
    }
    
    return "I'm not quite sure about that. I can help you with information about our Premium, Standard, or Regular collections, our Customization options, or our Contact details!\n\nYou can also reach us directly at +91 8959817421.";
  };

  const handleSend = (text: string = inputText) => {
    if (!text.trim()) return;
    
    const newUserMsg: Message = { id: Date.now().toString(), text, sender: 'user' };
    setMessages(prev => [...prev, newUserMsg]);
    setInputText('');

    setTimeout(() => {
      const botResponse = generateResponse(text);
      setMessages(prev => [...prev, { id: Date.now().toString(), text: botResponse, sender: 'bot' }]);
    }, 600);
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[99999] bg-gradient-to-r from-[#FF7A00] to-[#EC4899] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(255,122,0,0.3)] hover:scale-110 transition-all duration-300 flex items-center justify-center group ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'}`}
        title="Chat with K2B Assistant"
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100000] w-[350px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-6rem)] bg-white/90 backdrop-blur-xl border border-white/50 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden transition-all duration-500 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0B1324] to-[#170F2E] p-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
              <Bot className="w-5 h-5 text-[#FF7A00]" />
            </div>
            <div>
              <h3 className="font-sora font-bold text-white text-sm">K2B Assistant</h3>
              <p className="font-dm text-white/60 text-xs flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Online</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white transition-colors bg-white/5 p-1.5 rounded-full hover:bg-white/10">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-slate-50/50">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] rounded-2xl p-3 text-sm font-dm ${msg.sender === 'user' ? 'bg-gradient-to-br from-[#FF7A00] to-[#E66A00] text-white rounded-br-sm shadow-md' : 'bg-white border border-gray-200 text-slate-700 rounded-bl-sm shadow-sm'}`}>
                {msg.text.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line.startsWith('•') || line.startsWith('✔') ? <span className="block ml-2">{line}</span> : line}
                    {i !== msg.text.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies */}
        <div className="px-4 pb-2 pt-2 flex gap-2 overflow-x-auto custom-scrollbar shrink-0 bg-white border-t border-gray-100">
          {quickReplies.map((reply) => (
            <button
              key={reply}
              onClick={() => handleSend(reply)}
              className="whitespace-nowrap px-3 py-1.5 rounded-full bg-orange-50 hover:bg-orange-100 text-orange-600 border border-orange-100 font-manrope font-semibold text-xs transition-colors"
            >
              {reply}
            </button>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-3 bg-white border-t border-gray-100 shrink-0">
          <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex items-center gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 font-dm text-sm focus:outline-none focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00]"
            />
            <button type="submit" disabled={!inputText.trim()} className="w-10 h-10 rounded-full bg-[#0B1324] text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-800 transition-colors">
              <Send className="w-4 h-4 ml-0.5" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}