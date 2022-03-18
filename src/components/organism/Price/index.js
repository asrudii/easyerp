import React from 'react';
import Card from './Card';

export default function Price() {
  return (
    <div className="wrap-pricing">
      <Card
        title="Basic"
        price={500000}
        list={['Mencatat barang keluar', 'Mencatat hasil keuntungan']}
      />
      <Card
        title="Business"
        price={2500000}
        list={[
          'Mencatat barang masuk dan keluar',
          'Mencatat hasil keuntungan',
          'Analisa CHART hasil penjualan',
          'Support 7x24 Jam',
        ]}
      />
      <Card
        title="Entrepreneur"
        price={7500000}
        list={[
          'Mencatat barang masuk dan keluar',
          'Mencatat hasil keuntungan',
          'Analisa CHART hasil penjualan',
          'Support 7x24 Jam',
          'Export data ke Excel',
          'AI Prediksi penghasilan',
        ]}
      />
    </div>
  );
}
