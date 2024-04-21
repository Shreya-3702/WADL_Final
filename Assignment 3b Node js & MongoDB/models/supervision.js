const mongoose = require("mongoose");

const supervisionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    selectedYears: {
        type: [String],
        required: true,
        validate: {
            validator: function(v) {
                return v.length >= 1;
            },
            message: props => `${props.value} does not meet the minimum length of 1 for selectedYears array!`
        }
    },
    paperSlotsPerDay: {
        type: Number,
        min: 1,
        max: 2,
        required: true
    },
    noOfBlocksPerYear: {
        type: Map, 
        required: true,
        of: Number,
        validate: {
            validator: function(values) {
                for (let value of values.values()) {
                    if (!Number.isInteger(value)) {
                        return false;
                    }
                }
                return true;
            },
            message: props => `Values in noOfBlocksPerYear must be integers!`,
        }
    },
    timeSlots: {
        type: [Date]
    },
    yearSchedule: {
        type: [{
            totalSlots:Number,
            schedule: Map,
            headers:{
                days:[String],
                subjects:[String],
                blocks:[String]
            }
        }],
        default: [],
        required: true
    },
    createdOn: {
        type: Date,
        default: new Date()
    },
    updatedOn: {
        type: Date,
        default: new Date()
    },
});

const Supervision = mongoose.model("Supervision", supervisionSchema);

module.exports = Supervision;