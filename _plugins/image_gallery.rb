module Jekyll
  class ImageGalleryTag < Liquid::Tag
    def initialize(tag_name, markup, tokens)
      super
      @folder_path = markup.strip
    end

    def render(context)
      site = context.registers[:site]
      source = site.source
      full_path = File.join(source, @folder_path.gsub(/^\//, ''))
      
      if Dir.exist?(full_path)
        images = Dir.glob(File.join(full_path, "*.{jpg,jpeg,png,gif,webp}"))
                    .map { |img| File.basename(img) }
                    .sort
        
        output = '<div class="auto-gallery-grid">'
        images.each_with_index do |image, index|
          img_path = File.join(@folder_path, image)
          alt_text = File.basename(image, File.extname(image)).gsub(/[-_]/, ' ').capitalize
          
          output += <<~HTML
            <div class="auto-gallery-item" data-image="#{index}">
              <img src="#{img_path}" 
                   alt="#{alt_text}" 
                   loading="lazy"
                   onclick="openLightbox(#{index})">
              <div class="image-overlay">
                <span class="zoom-icon">🔍</span>
              </div>
            </div>
          HTML
        end
        output += '</div>'
        
        # Aggiungi JavaScript per il lightbox se non già presente
        unless context['lightbox_js_added']
          context['lightbox_js_added'] = true
          output += <<~LIGHTBOX
            <!-- Auto-generated lightbox for image gallery -->
            <div id="auto-lightbox" class="lightbox" onclick="closeLightbox()">
              <div class="lightbox-content">
                <span class="lightbox-close" onclick="closeLightbox()">&times;</span>
                <img id="auto-lightbox-img" src="" alt="">
                <div class="lightbox-nav">
                  <button class="lightbox-prev" onclick="changeLightboxImage(-1)">&#10094;</button>
                  <button class="lightbox-next" onclick="changeLightboxImage(1)">&#10095;</button>
                </div>
                <div class="lightbox-counter">
                  <span id="auto-lightbox-counter">1 / #{images.length}</span>
                </div>
              </div>
            </div>
          LIGHTBOX
        end
        
        output
      else
        '<p class="error">Cartella immagini non trovata: ' + @folder_path + '</p>'
      end
    end
  end
end

Liquid::Template.register_tag('image_gallery', Jekyll::ImageGalleryTag)
