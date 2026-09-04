const stats = [
  { icon: '/icons/cap.svg', value: '5+ years', label: 'teaching experience' },
  { icon: '/icons/user.svg', value: '300+', label: 'students taught' },
  { icon: '/icons/star.svg', value: '4.9/5', label: 'student rating' },
];

export function Stats() {
  return (
    <div className="mt-10 rounded-[24px] bg-back/60 px-6 py-6">
      <div className="flex flex-col divide-y divide-light-blue lg:flex-row lg:divide-x lg:divide-y-0">
        {stats.map(s => (
          <div
            key={s.value}
            className="flex items-center gap-4 py-4 lg:flex-1 lg:justify-center lg:py-0"
          >
            <img src={s.icon} alt="" className="h-10 w-10" />
            <div>
              <p className="text-[20px] font-medium leading-[1.2]">{s.value}</p>
              <p className="text-[16px] leading-[1.5] text-muted">{s.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
