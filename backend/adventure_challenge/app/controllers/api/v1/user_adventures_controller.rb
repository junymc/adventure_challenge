class Api::V1::UserAdventuresController < ApplicationController

    def create
        user = User.find(params[:user][:id])
        adventure = Adventure.find(params[:adventure][:id])
        @user_adventure = UserAdventure.new(user: user, adventure: adventure)   
        if @user_adventure.save
            render json: @user_adventure, status: 200
        else
            render json: {error: "Something went wrong, please try again."}, status: 400
        end
    end

    private

    def user_adventure_params
        params.require(:user_adventure).permit(:user, :adventure)
    end
   
end

