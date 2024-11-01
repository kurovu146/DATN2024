import Sidebar from "../components/Sidebar";

function DefaultLayout({ content }: any) {
  return (
    <div style={styles.container}>
      <Sidebar />
      <div style={styles.mapContainer}>
        {content}
      </div>
    </div>
  );
}

// Styles for the container and map
const styles = {
  container: {
    display: 'flex',
    height: '100vh', // Full height for the viewport
  },
  mapContainer: {
    flex: 1, // The map will take up the remaining space
  },
};

export default DefaultLayout;