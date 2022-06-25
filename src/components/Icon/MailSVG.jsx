import * as React from 'react';

function MailIcon({ size }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 512'
      style={{
        enableBackground: 'new 0 0 512 512',
      }}
      xmlSpace='preserve'
      width={size}
      height={size}
    >
      <circle
        style={{
          fill: '#0ba4e0',
        }}
        cx={256}
        cy={256}
        r={256}
      />
      <path
        style={{
          fill: '#fff',
        }}
        d='M317.536 379.904C295.408 391.568 272.88 396 245.936 396c-65.984 0-121.888-48.272-121.888-125.52 0-82.864 57.52-154.48 146.832-154.48 70 0 117.072 49.088 117.072 116.272 0 60.336-33.792 95.744-71.616 95.744-16.096 0-30.976-10.864-29.776-35.408h-1.6c-14.08 23.744-32.592 35.408-56.736 35.408-23.328 0-43.44-18.912-43.44-50.688 0-49.888 39.424-95.344 95.344-95.344 17.296 0 32.592 3.616 43.056 8.448l-13.68 72.816c-6.032 30.576-1.216 44.656 12.064 45.056 20.528.4 43.456-26.944 43.456-73.616 0-58.336-34.992-100.176-97.36-100.176-65.584 0-120.688 51.904-120.688 133.568 0 67.184 43.84 108.624 103.376 108.624 22.928 0 44.256-4.816 60.752-14.08l6.432 17.28zm-22.112-173.792c-4.016-1.216-10.864-2.816-20.112-2.816-35.408 0-63.968 33.392-63.968 72.416 0 17.712 8.848 30.576 26.544 30.576 23.328 0 44.656-29.776 49.088-54.72l8.448-45.456z'
      />
    </svg>
  );
}

export default MailIcon;
