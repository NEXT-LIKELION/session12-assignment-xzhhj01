// src/mapAPI.jsx
import React, { useEffect, useRef } from 'react';

export default function NaverMap({ lat, lng }) {
  const containerRef = useRef(null);

  useEffect(() => {
    // ① SDK가 로드되었는지 확인
    if (!window.naver || !window.naver.maps) return;

    // ② DOM에 div가 마운트된 후에 지도 생성
    const map = new naver.maps.Map(containerRef.current, {
      center: new naver.maps.LatLng(lat, lng),
      zoom: 13,
      scaleControl: true,
      mapDataControl: true,
      logoControlOptions: { position: naver.maps.Position.BOTTOM_LEFT },
    });

    // (선택) 리소스 정리
    return () => {
      map.destroy();
    };
  }, [lat, lng]);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '400px',  // 원하는 높이로 조정
      }}
    />
  );
}
