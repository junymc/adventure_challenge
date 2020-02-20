class Api::EvidencesController < ApplicationController

    def create
        @evidence = Evidence.new(evidence_params)
        if @evidence.save
            render json: @evidence, status: 200
        else
            render json: {error: "Something went wrong, try again."}, status: 400
        end
    end

    def update
    end

    private
    def evidence_params
        params.require(:evidence).permit(:image, :description)
    end
end