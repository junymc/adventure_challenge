class UserAdventuresController < ApplicationController

    def create
        @user_adventure = UserAdventure.new(user_adventure_params)   
        if @user_adventure.save
            render json: @user_adventure, status: 200
        else
            render json: {error: "Something went wrong, please try again."}, status: 400
        end
    end

    private

    def user_adventure_params
        params.require(:user_adventure).permit(:user_id, :adventure_id)
    end
   
end
