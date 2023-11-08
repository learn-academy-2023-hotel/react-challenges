# For the following Task challenge use initialize, setter, and getter methods for your class.
# As a developer, I can create a class called Task.
# As a developer, I can create three instances (objects) of class Task. e.g laundry = Task.new
# As a developer, I can initialize each instance of class Task with a title.
# As a developer, I can see the title of each instance of class Task.
# As a developer, I can initialize each instance of class Task with a status that has a default value of 'incomplete'.
# As a developer, I can update the status of each instance of class Task when the task has been completed.

# class Task
#     def initialize(task)
#         @task = task
#         @status = 'incomplete'
#     end
#     def get_task
#         @task
#     end
#     def get_status
#         @status
#     end
#     def completed_task
#         @status = 'completed'
#     end
#     def working_tasks
#         if @status
#             "Your #{@task} is #{@status}."
#         else
#             "Your #{@task} is #{@status}."
#         end
#     end
# end

# laundry = Task.new('laundry')
# food = Task.new('food')
# landscaping = Task.new('landscaping')

# # p laundry.get_status
# # p food.get_task
# # p landscaping.get_task

# laundry.completed_task

# p laundry.working_tasks
# p food.working_tasks
# p landscaping.working_tasks


class ColorPalette
    attr_accessor :color1, :color2, :color3

    def initialize(color1, color2, color3)
       @color1 = color1
       @color2 = color2
       @color3 = color3
    end
    def all_colors
        "#{@color1}, #{@color2}, #{@color3}"
    end
end

blue = ColorPalette.new('skyblue', 'teal', 'navy')
yellow = ColorPalette.new('cream', 'lemon', 'eggnog')
green = ColorPalette.new('money', 'emerald', 'seafoam')

blue.color1 = 'dark'
green.color3 = 'light'

p blue.color1
p blue.all_colors
p green.all_colors
