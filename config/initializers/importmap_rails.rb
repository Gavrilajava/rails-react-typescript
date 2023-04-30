Importmap::Map.class_eval do

  def cache_sweeper(watches: nil)
    if watches
      @cache_sweeper =
        Rails.application.config.file_watcher.new([], Array(watches).collect { |dir| [ dir.to_s, ["js", "jsx"]] }.to_h) do
          clear_cache
        end
    else
      @cache_sweeper
    end
  end

end