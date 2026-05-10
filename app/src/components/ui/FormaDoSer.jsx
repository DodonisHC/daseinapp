import { useMemo } from 'react';
import { motion } from 'framer-motion';

const FormaDoSer = ({ balance }) => {
  // Vertices for the triangle (normalized 0-100)
  // Top: Mind, Bottom Left: Body, Bottom Right: Purpose
  
  const points = useMemo(() => {
    const center = { x: 100, y: 110 };
    const radius = 80;
    
    // Mind (Top)
    const mindY = center.y - (radius * (balance.mind / 100));
    const mindX = center.x;
    
    // Body (Bottom Left) - 210 degrees
    const bodyAngle = (210 * Math.PI) / 180;
    const bodyX = center.x + (radius * (balance.body / 100)) * Math.cos(bodyAngle);
    const bodyY = center.y + (radius * (balance.body / 100)) * Math.sin(bodyAngle);
    
    // Purpose (Bottom Right) - 330 degrees
    const purposeAngle = (330 * Math.PI) / 180;
    const purposeX = center.x + (radius * (balance.purpose / 100)) * Math.cos(purposeAngle);
    const purposeY = center.y + (radius * (balance.purpose / 100)) * Math.sin(purposeAngle);
    
    // Smooth the path using Q (Quadratic Bezier) or just simple lines for now
    // A closed path: M (mind) L (body) L (purpose) Z
    // For "organic" feel, we can use a circle base and distort it, 
    // but a triangle-based blob is more representative of the 3 pillars.
    return `M ${mindX},${mindY} L ${bodyX},${bodyY} L ${purposeX},${purposeY} Z`;
  }, [balance]);

  return (
    <div className="forma-container" style={{ 
      width: '100%', 
      height: 220, 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      marginBottom: 20,
      position: 'relative'
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        width: 120,
        height: 120,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(140, 154, 142, 0.2) 0%, rgba(140, 154, 142, 0) 70%)',
        filter: 'blur(20px)',
        zIndex: 0
      }} />

      <svg width="200" height="220" viewBox="0 0 200 220" style={{ zIndex: 1 }}>
        <defs>
          <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8C9A8E" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#D4A373" stopOpacity="0.6" />
          </linearGradient>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
          </filter>
        </defs>
        
        <motion.path
          d={points}
          fill="url(#blobGradient)"
          stroke="#8C9A8E"
          strokeWidth="2"
          strokeLinejoin="round"
          initial={false}
          animate={{ d: points }}
          transition={{ 
            type: "spring", 
            stiffness: 50, 
            damping: 15,
            duration: 2 
          }}
          style={{ filter: 'url(#goo)' }} // Gooey effect for organic feel
        />

        {/* Pillar Points Indicators */}
        <circle cx="100" cy="30" r="2" fill="rgba(0,0,0,0.1)" />
        <circle cx="31" cy="150" r="2" fill="rgba(0,0,0,0.1)" />
        <circle cx="169" cy="150" r="2" fill="rgba(0,0,0,0.1)" />
      </svg>
    </div>
  );
};

export default FormaDoSer;
