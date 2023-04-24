Importmap::Map.class_eval do
  def cache_sweeper(watches: nil)
    if watches
      watches_hash = Array(watches).collect { |dir| [dir.to_s, %w['js jsx tsx']] }.to_h
      @cache_sweeper =
        Rails.application.config.file_watcher.new([], watches_hash) do
          clear_cache
        end
    else
      @cache_sweeper
    end
  end
end
