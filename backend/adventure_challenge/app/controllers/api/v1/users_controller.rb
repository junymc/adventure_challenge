class Api::V1::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            session[:user_id] = @user.id
            render json: @user, only: [:id, :username], status: 200
        else
            render json: {error: "Unable to create an account."}, status: 400
        end
    end

    def current_user
        @user = User.find_by(id: session[:user_id])
        if @user
            render json: @user, except: [:password_digest, :created_at, :updated_at], status: 200
        end
    end


    private
    def user_params
        params.require(:user).permit(:username, :password)
    end

end