
import React, { useState } from 'react';

const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    area: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waText = `Hi SR Digital! I'm a realtor in Delhi NCR. I want qualified leads.
Name: ${formData.name}
Phone: ${formData.phone}
Area: ${formData.area}
Budget: ${formData.budget}
Message: ${formData.message}
Please share the free lead audit + plan.`;
    
    window.open(`https://wa.me/919211841593?text=${encodeURIComponent(waText)}`, '_blank');
    setFormData({ name: '', phone: '', area: '', budget: '', message: '' });
  };

  return (
    <section id="audit" className="py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto reveal relative z-10">
        <div className="glass rounded-[40px] p-8 md:p-16 border border-white/10 shadow-2xl overflow-hidden relative">
          {/* Shimmer overlay */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500 to-emerald-500/0 shimmer-effect"></div>

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Request a <span className="gold-text">Free</span> Audit</h2>
            <p className="text-slate-400">Limited slots this week — 15-min strategy call + ad audit included.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300 ml-1">Your Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="John Doe" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500 transition-all" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300 ml-1">Phone Number</label>
                <input 
                  required
                  type="tel" 
                  placeholder="9211841593" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500 transition-all" 
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300 ml-1">Target Area</label>
                <select 
                  required
                  value={formData.area}
                  onChange={(e) => setFormData({...formData, area: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500 transition-all appearance-none"
                >
                  <option value="" className="bg-slate-900">Select Area</option>
                  <option value="Gurgaon" className="bg-slate-900">Gurgaon</option>
                  <option value="Noida" className="bg-slate-900">Noida</option>
                  <option value="Delhi" className="bg-slate-900">Delhi</option>
                  <option value="Faridabad" className="bg-slate-900">Faridabad</option>
                  <option value="Ghaziabad" className="bg-slate-900">Ghaziabad</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300 ml-1">Monthly Ad Budget</label>
                <select 
                  required
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500 transition-all appearance-none"
                >
                  <option value="" className="bg-slate-900">Select Budget</option>
                  <option value="₹25k - ₹50k" className="bg-slate-900">₹25k - ₹50k</option>
                  <option value="₹50k - ₹1L" className="bg-slate-900">₹50k - ₹1L</option>
                  <option value="₹1L - ₹3L" className="bg-slate-900">₹1L - ₹3L</option>
                  <option value="₹3L+" className="bg-slate-900">₹3L+</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-300 ml-1">Any Specific Requirements?</label>
              <textarea 
                rows={3} 
                placeholder="I want leads for a premium project in Sector 150..." 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500 transition-all"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full py-5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xl rounded-xl transition-all emerald-glow shadow-xl shadow-emerald-500/20 active:scale-[0.98]"
            >
              Get My Free Strategy Plan →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
