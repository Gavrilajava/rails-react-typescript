class UsersController < ApplicationController

  def index
    @users = User.limit(20).to_table
  end

  def create

  end

  def update

  end

  def destroy

  end
end
