import Header from "../components/Header"; // Make sure to import the Header component
import { useState } from "react";

function DefaultLayout({ content }: any) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={styles.container}>
      <Header isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div style={styles.contentWrapper}>
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
    display: 'flex' as const,
    justifyContent: 'center' as const,
  },
};


export default DefaultLayout;
