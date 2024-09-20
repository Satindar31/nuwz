export default function TodayGrid() {
  const cl = new Date();
  const date = `${cl.getDate()}-${(cl.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${cl.getFullYear()}`;

  return (
    <div className="max-w-[65ch]">You&apos;re Signed in, Great. Today is <span className="font-bold">{cl.toString()}</span> which after formatting becomes <span className="font-bold">{date}</span></div>
  );
}
