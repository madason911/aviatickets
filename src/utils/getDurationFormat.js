export function getDurationFormat(legDuration) {
  return (
    (Math.floor(legDuration / 60) ? `${Math.floor(legDuration / 60)} ч ` : "") +
    (legDuration % 60 ? `${legDuration % 60} мин` : "")
  );
}
