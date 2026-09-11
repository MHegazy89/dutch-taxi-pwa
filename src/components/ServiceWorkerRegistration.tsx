'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    workbox?: any;
  }
}

export function ServiceWorkerRegistration() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator && window.workbox !== undefined) {
      const wb = window.workbox;
      wb.addEventListener('installed', (event: any) => {
        if (!event.isUpdate) {
          console.log('[PWA] CBR Taxi Exam Prep is installed & ready for offline study');
        }
      });
      wb.register();
    }
  }, []);

  return null;
}
