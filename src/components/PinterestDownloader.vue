<template>
  <div class="pinterest-downloader">
    <h1>Pinterest Downloader</h1>
    
    <div class="input-section">
      <input 
        v-model="pinUrl" 
        placeholder="Masukkan URL Pinterest" 
        class="url-input"
      />
      <button 
        @click="downloadContent" 
        :disabled="!pinUrl"
        class="download-btn"
      >
        Unduh
      </button>
    </div>
    
    <div v-if="loading" class="loading">
      Mengunduh konten...
    </div>
    
    <div v-if="downloadedContent" class="download-result">
      <div v-if="downloadedContent.media_type === 'image'" class="image-result">
        <h3>Gambar Pinterest</h3>
        <img 
          :src="downloadedContent.image" 
          alt="Pinterest Image" 
          class="preview-image"
        />
        <a 
          :href="downloadedContent.image" 
          target="_blank"
          download 
          class="download-button"
        >
          Unduh Gambar
        </a>
      </div>
      
      <div v-else-if="downloadedContent.media_type === 'video/mp4'" class="video-result">
        <h3>Video Pinterest</h3>
        <video 
          :src="downloadedContent.video" 
          controls 
          class="preview-video"
        ></video>
        <a 
          :href="downloadedContent.video" 
          target="_blank"
          download 
          class="download-button"
        >
          Unduh Video
        </a>
      </div>
    </div>
    
    <div v-if="error" class="error-message">
      {{ error }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      pinUrl: '',
      downloadedContent: null,
      loading: false,
      error: null
    }
  },
  methods: {
    async downloadContent() {
      this.loading = true
      this.error = null
      this.downloadedContent = null
      
      try {
        const response = await axios.get('https://aemt.uk.to/download/pindl', {
          params: { url: this.pinUrl }
        })
        
        if (response.data.result.success) {
          this.downloadedContent = response.data.result.data
        } else {
          this.error = 'Gagal mengunduh konten'
        }
      } catch (err) {
        this.error = 'Gagal mengunduh konten. Periksa URL.'
        console.error(err)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.pinterest-downloader {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.input-section {
  display: flex;
  margin-bottom: 20px;
}

.url-input {
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.download-btn {
  padding: 10px 20px;
  background-color: #e60023;
  color: white;
  border: none;
  border-radius: 4px;
  margin-left: 10px;
}

.preview-image, .preview-video {
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

.loading, .error-message {
  margin-top: 20px;
  color: #e60023;
}
</style>