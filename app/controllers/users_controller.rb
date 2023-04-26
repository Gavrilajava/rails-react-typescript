class UsersController < ApplicationController

  def index
    @users = User.limit(20)
  end

end
