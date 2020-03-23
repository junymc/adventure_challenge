class Api::V1::SessionsController < ApplicationController

    def auth
        # byebug
        # cookies["logged_in"] = logged_in?
        render json: {csrf_auth_token: form_authenticity_token}
    end
    
    def create
        @user = User.find_by(username: params[:user][:username])
        if @user && @user.authenticate(params[:user][:password])
            session[:user_id] = @user.id
            render json: @user, only: [:id, :username], status: 200
        else
            render json: {error: "Unable to login, try again."}, status: 400
        end
    end

    def destroy
        session.delete(:user_id)
        render json: {status: 200}
    end
end