class UsersController < ApplicationController

  def index
    @users = User.limit(20)
  end

  def create

  end

  def update

  end

  def destroy

  end
end
