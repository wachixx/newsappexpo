
export default function getDates(): { today: string, aWeekAgo: string } {
  const today = new Date().toISOString().slice(0, 10); // Get YYYY-MM-DD format
  const aWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10); // Get YYYY-MM-DD format for a week ago

  return { today, aWeekAgo };
}

