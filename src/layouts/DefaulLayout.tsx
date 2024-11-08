
import Sidebar from "../components/Sidebar";
import Header from "../components/Header"; // Make sure to import the Header component

function DefaultLayout({ content }: any) {
  return (
    <div style={styles.container}>
      <Header /> {/* Add Header at the top */}
      <div style={styles.contentWrapper}>
        <Sidebar />
        <div style={styles.mapContainer}>
          {content}
        </div>
      </div>
    </div>
  );
}

// Styles for the layout
const styles = {
  container: {
    display: 'flex' as const,
    flexDirection: 'column' as const, // Explicitly declare as 'column'
    height: '100vh', 
  },
  contentWrapper: {
    display: 'flex' as const,
    flex: 1,
  },
  mapContainer: {
    flex: 1,
    overflow: 'auto' as const,
  },
};


export default DefaultLayout;
