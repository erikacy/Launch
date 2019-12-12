class Jukebox
  SONGS_AVAILABLE = [
    "Hello - Lionel Ritchie",
    "Kokomo - The Beach Boys",
    "Girl You Know It’s True - Milli Vanilli",
    "Agadoo - Black Lace",
    "Down Under - Men at Work",
    "Nothing's Gonna Stop Us Now - Starship",
    "Get Outta My Dreams, Get Into My Car - Billy Ocean",
    "I Just Called To Say I Love You - Stevie Wonder",
    "Hangin' Tough - New Kids on the Block",
    "We Built This City - Starship",
    "Wake Me Up Before You Go Go - Wham!",
    "We Didn't Start The Fire - Billy Joel",
    "I Wanna Dance With Somebody - Whitney Houston",
    "U Can't Touch This - MC Hammer"
  ]

  def initialize(users_songs)
    @playlist = []
    users_songs.each do |songs|
      if SONGS_AVAILABLE.include?(songs)
        @playlist << songs
      end
    end
  end

  def shuffle_songs!
    @playlist.shuffle!
  end

  def play!
    @playlist.shift
  end

  def add_track(new_song)
    @playlist << new_song
    if SONGS_AVAILABLE.include?(new_song)
    SONGS_AVAILABLE.include?(new_song)
  end
end



requested = Jukebox.new([
  "Hello - Lionel Ritchie",
  "Kokomo - The Beach Boys",
  "Girl You Know It’s True - Milli Vanilli",
  "Wake Me Up Before You Go Go - Wham!",
  "We Didn't Start The Fire - Billy Joel",
  "I Wanna Dance With Somebody - Whitney Houston",
  "U Can't Touch This - MC Hammer"
  ])
  puts requested.shuffle_songs!
