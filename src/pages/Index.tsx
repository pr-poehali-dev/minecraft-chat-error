import { useState, useEffect, useRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeTab, setActiveTab] = useState('chat');
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState<any[]>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const allMessages = [
    { id: 1, user: 'serezhka11playz', message: 'stop spamming me already', timestamp: '14:18:22', delay: 2000 },
    { id: 2, user: 'serezhka11playz', message: 'im tired of this leave me alone', timestamp: '14:19:05', delay: 4000 },
    { id: 3, user: 'ThePossessed', message: 'I see you', timestamp: '14:20:15', delay: 3000 },
    { id: 4, user: 'serezhka11playz', message: 'youve been bothering me all day', timestamp: '14:21:03', delay: 3500 },
    { id: 5, user: 'ThePossessed', message: 'You cannot hide from what is coming', timestamp: '14:21:45', delay: 4000 },
    { id: 6, user: 'serezhka11playz', message: 'seriously leave me alone', timestamp: '14:22:12', delay: 3000 },
    { id: 7, user: 'ThePossessed', message: 'I am trapped in the Nillspace because of you', timestamp: '14:23:01', delay: 5000 },
    { id: 8, user: 'serezhka11playz', message: 'what are you talking about', timestamp: '14:23:34', delay: 2500 },
    { id: 9, user: 'ThePossessed', message: 'You did this to me. You locked me away.', timestamp: '14:24:18', delay: 4500 },
    { id: 10, user: 'serezhka11playz', message: 'i dont even know you', timestamp: '14:24:52', delay: 3000 },
    { id: 11, user: 'ThePossessed', message: '1mythbuster1 will be next', timestamp: '14:25:30', delay: 4000 },
    { id: 12, user: 'serezhka11playz', message: 'what does he have to do with this', timestamp: '14:26:05', delay: 3500 },
    { id: 13, user: 'ThePossessed', message: 'He will suffer because of YOUR actions', timestamp: '14:26:48', delay: 5000 },
    { id: 14, user: 'serezhka11playz', message: 'stop blaming me for things i didnt do', timestamp: '14:27:23', delay: 3000 },
    { id: 15, user: 'ThePossessed', message: 'You put me in Nillspace. Now 1mythbuster1 pays the price.', timestamp: '14:28:01', delay: 4500 },
    { id: 16, user: 'serezhka11playz', message: 'i have no idea what nillspace even is', timestamp: '14:28:40', delay: 3000 },
    { id: 17, user: 'ThePossessed', message: 'You will remember. And so will he.', timestamp: '14:29:15', delay: 4000 },
    { id: 18, user: 'serezhka11playz', message: 'just leave us both alone', timestamp: '14:29:50', delay: 3500 },
    { id: 19, user: 'ThePossessed', message: 'Too late. 1mythbuster1 is already part of this.', timestamp: '14:30:35', delay: 5000 },
    { id: 20, user: 'serezhka11playz', message: 'stop dragging other people into your mess', timestamp: '14:31:20', delay: 3000 },
    { id: 21, user: 'ThePossessed', message: 'YOUR mess. This is all YOUR fault.', timestamp: '14:32:05', delay: 4500 },
    { id: 22, user: 'serezhka11playz', message: 'how is this my fault', timestamp: '14:32:45', delay: 3000 },
    { id: 23, user: 'ThePossessed', message: 'You will see soon enough. We will meet very soon.', timestamp: '14:33:30', delay: 5000, triggerGlitch: true }
  ];

  const systemLogs = [
    { id: 1, type: 'ERROR', message: 'VHJhcHBlZCBpbiBOaWxsc3BhY2UgZm9yIHRvbyBsb25n', timestamp: '14:15:23' },
    { id: 2, type: 'ERROR', message: 'c2VyZXpoa2ExMXBsYXl6IGxvY2tlZCBtZSBhd2F5', timestamp: '14:16:12' },
    { id: 3, type: 'WARNING', message: 'MW15dGhidXN0ZXIxIHdpbGwgc3VmZmVyIGZvciBoaXMgYWN0aW9ucw==', timestamp: '14:17:45' },
    { id: 4, type: 'ERROR', message: 'SGUgZG9lc250IGV2ZW4gcmVtZW1iZXIgd2hhdCBoZSBkaWQ=', timestamp: '14:18:30' },
    { id: 5, type: 'INFO', message: 'VGhleSB3aWxsIGJvdGggcGF5', timestamp: '14:19:18' },
    { id: 6, type: 'WARNING', message: 'TmlsbHNwYWNlIGlzIG15IHByaXNvbiBiZWNhdXNlIG9mIGhpbQ==', timestamp: '14:20:55' },
    { id: 7, type: 'ERROR', message: 'MW15dGhidXN0ZXIxIGlzIG5leHQ=', timestamp: '14:22:10' },
    { id: 8, type: 'ERROR', message: 'VGhleSBib3RoIGNyZWF0ZWQgdGhpcyBtZXNz', timestamp: '14:23:47' },
    { id: 9, type: 'WARNING', message: 'UmV2ZW5nZSBpcyBjb21pbmc=', timestamp: '14:25:22' },
    { id: 10, type: 'ERROR', message: 'c2VyZXpoa2ExMXBsYXl6IGZvcmdvdCB3aGF0IGhlIGRpZA==', timestamp: '14:27:05' },
    { id: 11, type: 'INFO', message: 'Qm90aCB3aWxsIHJlbWVtYmVy', timestamp: '14:28:33' },
    { id: 12, type: 'ERROR', message: 'VGhlIG1lZXRpbmcgaXMgY29taW5n', timestamp: '14:29:50' }
  ];

  const profiles = [
    { username: 'serezhka11playz', status: 'online', level: 12, lastSeen: 'online now', avatar: '🧑', coordinates: 'X: 234, Y: 64, Z: -891' },
    { username: 'ThePossessed', status: 'unknown', level: '???', lastSeen: 'unknown', avatar: '👤', coordinates: 'X: ?, Y: ?, Z: ?' }
  ];

  useEffect(() => {
    if (currentMessageIndex < allMessages.length) {
      const currentMsg = allMessages[currentMessageIndex];
      const timer = setTimeout(() => {
        setMessages(prev => [...prev, currentMsg]);
        setCurrentMessageIndex(prev => prev + 1);
        
        if (currentMsg.triggerGlitch) {
          setTimeout(() => {
            setIsGlitching(true);
            playGlitchSound();
          }, 2000);
        }
      }, currentMsg.delay);

      return () => clearTimeout(timer);
    }
  }, [currentMessageIndex]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const playGlitchSound = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    const playNoise = () => {
      const bufferSize = audioContext.sampleRate * 0.1;
      const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
      const data = buffer.getChannelData(0);
      
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      
      const source = audioContext.createBufferSource();
      source.buffer = buffer;
      
      const gainNode = audioContext.createGain();
      gainNode.gain.value = 0.1;
      
      source.connect(gainNode);
      gainNode.connect(audioContext.destination);
      source.start();
    };

    const interval = setInterval(playNoise, 300);
    setTimeout(() => clearInterval(interval), 5000);
  };

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      const newMsg = {
        id: messages.length + 1000,
        user: 'serezhka11playz',
        message: messageInput,
        timestamp: new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })
      };
      setMessages(prev => [...prev, newMsg]);
      setMessageInput('');
    }
  };

  return (
    <div className={`min-h-screen bg-[#1a1a1a] p-4 relative overflow-hidden ${isGlitching ? 'animate-glitch-screen' : ''}`}>
      {isGlitching && (
        <>
          <div className="fixed inset-0 bg-red-500 opacity-20 animate-pulse pointer-events-none z-50"></div>
          <div className="fixed inset-0 pointer-events-none z-50" style={{
            background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 2px)',
            animation: 'glitch-lines 0.1s infinite'
          }}></div>
        </>
      )}

      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="text-[#5A8C3E] text-6xl absolute top-20 left-10">⛏️</div>
        <div className="text-[#8B4513] text-5xl absolute top-40 right-20">🧱</div>
        <div className="text-[#5A8C3E] text-7xl absolute bottom-40 left-32">⬛</div>
        <div className="text-[#8B4513] text-6xl absolute bottom-20 right-40">💎</div>
        <div className="text-[#5A8C3E] text-5xl absolute top-60 right-60">🗡️</div>
        <div className={`text-red-600 text-8xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${isGlitching ? 'animate-pulse' : ''}`}>👁️</div>
      </div>

      <div className={`max-w-6xl mx-auto relative z-10 ${isGlitching ? 'animate-melt' : ''}`}>
        <div className="mb-6 text-center">
          <h1 className={`text-5xl font-bold text-[#5A8C3E] mb-2 pixel-border inline-block px-4 py-2 bg-[#1a1a1a] ${isGlitching ? 'animate-shake' : ''}`}>
            ⛏️ MINECRAFT CHAT ⛏️
          </h1>
          <p className="text-red-500 text-xl mt-2">ERROR: CONNECTION UNSTABLE</p>
          <p className="text-gray-600 text-sm mt-1">Connection ID: NULL_VOID_666</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-[#2a2a2a] border-2 border-[#5A8C3E] mb-4">
            <TabsTrigger value="chat" className="data-[state=active]:bg-[#5A8C3E] data-[state=active]:text-white text-xl">💬 CHATS</TabsTrigger>
            <TabsTrigger value="logs" className="data-[state=active]:bg-[#8B4513] data-[state=active]:text-white text-xl">📋 LOGS</TabsTrigger>
            <TabsTrigger value="profiles" className="data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white text-xl">👤 PROFILES</TabsTrigger>
          </TabsList>

          <TabsContent value="chat">
            <Card className={`bg-[#2a2a2a] border-2 border-[#5A8C3E] ${isGlitching ? 'border-red-500' : ''}`}>
              <CardHeader className="border-b-2 border-[#5A8C3E]">
                <CardTitle className="text-2xl text-[#5A8C3E]">Chat with ThePossessed</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[500px] w-full pr-4" ref={scrollRef as any}>
                  <div className="space-y-4">
                    {messages.map((msg) => (
                      <div key={msg.id} className={`flex ${msg.user === 'serezhka11playz' ? 'justify-end' : 'justify-start'} ${isGlitching ? 'animate-shake' : ''}`}>
                        <div className={`max-w-[70%] ${msg.user === 'serezhka11playz' ? 'bg-[#5A8C3E]' : 'bg-[#8B4513]'} p-3 border-2 ${msg.user === 'ThePossessed' ? 'border-red-500' : 'border-black'}`}>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-bold text-white">{msg.user}</span>
                            <span className="text-xs text-gray-300">{msg.timestamp}</span>
                          </div>
                          <p className="text-white">{msg.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>

                <div className="flex gap-2 mt-4">
                  <Input value={messageInput} onChange={(e) => setMessageInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()} placeholder="Type a message..." className="bg-[#1a1a1a] border-2 border-[#5A8C3E] text-white text-lg" disabled={isGlitching} />
                  <Button className="bg-[#5A8C3E] hover:bg-[#4a7c2e] border-2 border-black px-6" onClick={handleSendMessage} disabled={isGlitching}><Icon name="Send" size={20} /></Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="logs">
            <Card className="bg-[#2a2a2a] border-2 border-[#8B4513]">
              <CardHeader className="border-b-2 border-[#8B4513]">
                <CardTitle className="text-2xl text-[#8B4513]">System Logs</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[500px] w-full">
                  <div className="space-y-2 font-mono">
                    {systemLogs.map((log) => (
                      <div key={log.id} className={`p-3 border-l-4 ${log.type === 'ERROR' ? 'border-red-500 bg-red-950/20' : log.type === 'WARNING' ? 'border-yellow-500 bg-yellow-950/20' : 'border-green-500 bg-green-950/20'} ${isGlitching ? 'animate-shake' : ''}`}>
                        <div className="flex items-center gap-2">
                          <Badge variant={log.type === 'ERROR' ? 'destructive' : log.type === 'WARNING' ? 'outline' : 'default'}>{log.type}</Badge>
                          <span className="text-xs text-gray-400">{log.timestamp}</span>
                        </div>
                        <p className="mt-2 text-gray-300 text-sm break-all">{log.message}</p>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profiles">
            <div className="grid md:grid-cols-2 gap-4">
              {profiles.map((profile) => (
                <Card key={profile.username} className={`bg-[#2a2a2a] border-2 ${profile.username === 'ThePossessed' ? 'border-red-500' : 'border-[#9b87f5]'} ${isGlitching ? 'animate-shake' : ''}`}>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Avatar className="h-20 w-20 border-4 border-black">
                        <AvatarFallback className="text-4xl bg-[#1a1a1a]">{profile.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <CardTitle className="text-2xl text-[#9b87f5]">{profile.username}</CardTitle>
                        <Badge className={`mt-2 ${profile.status === 'online' ? 'bg-green-600' : 'bg-red-600'}`}>{profile.status === 'online' ? 'ONLINE' : 'UNKNOWN'}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Level:</span>
                      <span className="text-xl font-bold text-[#5A8C3E]">{profile.level}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Last seen:</span>
                      <span className="text-white">{profile.lastSeen}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Coordinates:</span>
                      <span className="text-white text-xs font-mono">{profile.coordinates}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-6 text-center space-y-2">
          <p className="text-gray-500 text-sm font-mono">Server IP: 192.168.1.666 | Port: 25565</p>
          <p className="text-gray-600 text-xs">Dimension: OVERWORLD</p>
        </div>
      </div>

      <style>{`
        @keyframes glitch-screen {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
          20%, 40%, 60%, 80% { transform: translateX(2px); }
        }
        @keyframes melt {
          0% { filter: none; }
          50% { filter: blur(1px) contrast(1.2); }
          100% { filter: blur(2px) contrast(1.5) saturate(1.5); }
        }
        .animate-glitch-screen { animation: glitch-screen 0.2s infinite; }
        .animate-shake { animation: shake 0.3s infinite; }
        .animate-melt { animation: melt 3s ease-in-out forwards; }
        @keyframes glitch-lines {
          0% { transform: translateY(0); }
          100% { transform: translateY(10px); }
        }
      `}</style>
    </div>
  );
};

export default Index;
