export function SiteFooter() {
  return (
    <footer className="border-t border-border py-8 text-sm text-muted-foreground">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>
          © {new Date().getFullYear()} LeonidaHQ. Bureau of Civilian Affairs.
          Not affiliated with Rockstar Games or Take-Two Interactive.
        </p>
        <p>Field office: Fredericksburg, VA · hello@leonidahq.gg</p>
      </div>
    </footer>
  );
}
