<template>
  <div class="download-result">
    <div v-if="mediaType === 'video/mp4'" class="video-result">
      <h3>Video Download</h3>
      <video 
        :src="mediaUrl" 
        controls 
        class="preview-video"
      ></video>
      <a 
        :href="mediaUrl" 
        download 
        class="download-button"
      >
        Download Video
      </a>
    </div>
    
    <div v-else-if="mediaType === 'image'" class="image-result">
      <h3>Image Download</h3>
      <img 
        :src="mediaUrl" 
        alt="Pinterest Image" 
        class="preview-image"
      />
      <a 
        :href="mediaUrl" 
        download 
        class="download-button"
      >
        Download Image
      </a>
    </div>
    
    <div v-else class="error-message">
      Tidak dapat mengunduh konten
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mediaType: {
      type: String,
      required: true
    },
    mediaUrl: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.download-result {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  text-align: center;
}

.preview-video, .preview-image {
  max-width: 100%;
  max-height: 400px;
  margin-bottom: 15px;
}

.download-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #e60023;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}
</style>