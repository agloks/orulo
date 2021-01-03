# app/controllers/users_controller.rb
class UsersController < ApplicationController
  skip_before_action :authorize_request, only: :create
  
  #GET /user/profile
  def index
    if @current_user
      return json_response(@current_user, :ok)
    end

    json_response(Message.fail_operation, :bad_request)
  end

  # POST /user/signup
  # return authenticated token upon signup
  def create
    user = User.create!(user_params)
    auth_token = AuthenticateUser.new(user.email, user.password).call
    response = { message: Message.account_created, auth_token: auth_token }
    json_response(response, :created)
  end

  # PATCH /user/favorites
  def add_favorite
    # check to avoid duplicate
    save = true
    @current_user.favorites.each do |item|
      if item == user_params[:favorites]
        save = false
        return json_response(Message.fail_operation, :ok)
      end
    end

    if save
      @current_user.favorites << user_params[:favorites]
      @current_user.save!
      json_response(Message.successful_operation, :ok)
    end
  end

  private

  def user_params
    params.permit(
      :name,
      :email,
      :password,
      :password_confirmation,
      :favorites
    )
  end
end