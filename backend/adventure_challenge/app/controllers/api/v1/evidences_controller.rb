class Api::V1::EvidencesController < ApplicationController

    def create
        # byebug
        if params[:adventureId]
            adventure = Adventure.find(params[:adventureId])
            evidence = adventure.evidence.build({image: params[:image], description: params[:description], adventureId: params[:adventureId]})
            evidence.user = current_user
        end
        if evidence.save
            render json: evidence, status: 200
        else
            render json: {error: "Something went wrong, try again."}, status: 400
        end
    end

    def update
        @evidence = Evidence.find(params[:id])
        @evidence.update
        render json: @evidence, status: 200
    end

    def show
        @evidence = Evidence.fine(params[:id])
        render json: @evidence, status: 200
    end

    def delete
        @evidence = Evidence.fine(params[:id])
        @evidence.delete
        render json: {message: "Evidence is deleted!"}, status: 200
    end

    private
    def evidence_params
        params.require(:evidence).permit(:image, :description, :adventure)
    end
end