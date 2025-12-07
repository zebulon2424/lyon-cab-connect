import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Minimize2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const LiveChat = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Welcome message
      setTimeout(() => {
        setMessages([
          {
            id: '1',
            text: t('chat.welcomeMessage'),
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
      }, 500);
    }
  }, [isOpen, t]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      setIsTyping(false);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: t('chat.autoResponse'),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-dark shadow-lg hover:bg-gold/90 transition-colors"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={t('chat.openChat')}
          >
            <MessageCircle size={28} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-6 right-6 z-50 flex h-[500px] w-[380px] flex-col overflow-hidden rounded-2xl bg-surface border border-gold/20 shadow-2xl"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-gradient-to-r from-dark to-dark/95 px-4 py-3 border-b border-gold/20">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-dark">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{t('chat.title')}</h3>
                  <p className="text-xs text-gold">{t('chat.subtitle')}</p>
                </div>
              </div>
              <div className="flex gap-1">
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-2 text-white/60 hover:bg-white/10 hover:text-white transition-colors"
                  aria-label={t('chat.minimize')}
                >
                  <Minimize2 size={18} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-2 text-white/60 hover:bg-white/10 hover:text-white transition-colors"
                  aria-label={t('chat.close')}
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-dark/50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                      message.sender === 'user'
                        ? 'bg-gold text-dark rounded-br-md'
                        : 'bg-surface border border-gold/20 text-white rounded-bl-md'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className={`text-[10px] mt-1 ${message.sender === 'user' ? 'text-dark/60' : 'text-white/40'}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-surface border border-gold/20 rounded-2xl rounded-bl-md px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gold/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-gold/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-gold/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-gold/20 bg-surface p-4">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={t('chat.placeholder')}
                  className="flex-1 bg-dark/50 border-gold/20 text-white placeholder:text-white/40"
                />
                <Button
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  className="bg-gold text-dark hover:bg-gold/90 disabled:opacity-50"
                  size="icon"
                >
                  <Send size={18} />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LiveChat;
