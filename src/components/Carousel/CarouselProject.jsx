import Box from '@mui/material/Box';

const IMAGE_WIDTH = 800;
const CarouselProject = ({ images }) => {
  const validImages = Array.isArray(images) ? images : [];

  return (
    <Box
      sx={{
        width: { xs: '100%', md: `${IMAGE_WIDTH}px` },
        height: { xs: '220px', md: '450px' },
        borderRadius: '10px',
        overflow: 'hidden',
        position: 'relative',
        mx: 'auto',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          height: '100%',
          transition: 'transform 0.5s',
        }}
      >
        {validImages.map((src, idx) => (
          <Box
            key={idx}
            sx={{
              width: { xs: '100%', md: `${IMAGE_WIDTH}px` },
              maxWidth: '100%',
              height: '100%',
              borderRadius: '10px',
              overflow: 'hidden',
              flexShrink: 0,
              background: '#222',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              component="img"
              src={src}
              alt={`portfolio${idx + 1}`}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '10px',
                display: 'block',
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CarouselProject;
