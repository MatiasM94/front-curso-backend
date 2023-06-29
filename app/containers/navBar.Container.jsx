import { getProfile } from "@/app/(main)/profile/page";
import NavBar from "@/app/components/navbar";

export default async function NavBarContainer() {
  const profile = await getProfile();
  const { cookie } = profile;

  if (profile.error) {
    return null;
  }
  return (
    <header>
      <NavBar profile={profile.data} cookie={cookie} />
    </header>
  );
}
