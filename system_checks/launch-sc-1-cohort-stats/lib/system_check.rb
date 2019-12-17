class SystemCheck
  attr_reader :name, :due_date, :submissions

  def initialize(name, due_date)
    @name = name
    @due_date = due_date
    @submissions = []
  end

  def add_submission(submission)
    @submissions << submission
  end
end
