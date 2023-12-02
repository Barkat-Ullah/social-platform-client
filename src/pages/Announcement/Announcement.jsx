
import SingleAnnouncement from "./SingleAnnouncement";
import useAnnouncement from "../../hooks/useAnnouncement";
// import SharedTitle from "../../components/SharedTitle";


const Announcement = () => {

    const [announcements] = useAnnouncement()

    return (
        <div>
            {/* <SharedTitle heading="Announcements"></SharedTitle> */}
            <p className="text-slate-700 text-center">Exciting news! Join us for upcoming community events. Details to be announced soon.</p>
            <div className="grid my-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                announcements.map(announcement => <SingleAnnouncement key={announcement._id} announcement={announcement}></SingleAnnouncement>)
            }
            </div>
        </div>
    );
};

export default Announcement;