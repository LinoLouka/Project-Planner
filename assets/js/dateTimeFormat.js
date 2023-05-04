export function getTimeFormat(dateTime) {
  const dateActuelle = new Date(
    Date(dateTime).toLocaleString("fr-BE", {
      timeZone: `${Intl.DateTimeFormat().resolvedOptions().timeZone}`,
    })
  );
  return new Date(
    Date.UTC(
      dateActuelle.getFullYear(),
      dateActuelle.getMonth(),
      dateActuelle.getDate(),
      dateActuelle.getHours(),
      dateActuelle.getMinutes()
    )
  )
    .toISOString()
    .slice(0, 16);
}
