require "pry"

class Soundtrack
  attr_reader :songs, :name

  def initialize(name, songs)
    @name = name
    @songs = songs
  end

  def add_song(song)
    @songs << song
  end

  def print_soundtrack
    song_list = ""
    @songs.each do |song|
      # binding.pry
       song_list += "#{song.name}\n"
    end
    song_list
  end
end
