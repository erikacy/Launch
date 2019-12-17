require "pry"

class SystemCheckSubmission
  include Grade
  attr_reader :solution, :student

  def initialize(solution, student)
    @solution = solution
    @student = student
  end
end
