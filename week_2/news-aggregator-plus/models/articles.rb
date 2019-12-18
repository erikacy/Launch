class Articles
  attr_reader :id, :title, :description, :url

  def initialize(id, description, title, url)
    @id = id
    @title = title
    @description = description
    @url = url
  end

  def self.retrieve_articles_objects(csv)
    article_objects = []
    CSV.foreach(csv, headers: true) do |row|
      new_article = Articles.new(
        row["id"],
        row["description"],
        row["title"],
        row["url"]
      )
      article_objects << new_article
    end
    article_objects
  end
end
