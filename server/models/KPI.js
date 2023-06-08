import mongoose from "mongoose";

const Schema = mongoose.Schema;

const dailySchema = new Schema(
  {
    date: String,
    revenue: {
      type: Number,
      currency: "USD",
      get: (v) => v / 100
    },
    expenses: {
      type: Number,
      currency: "USD",
      get: (v) => v / 100
    }
  },
  { toJSON: { getters: true }} 
)

const monthSchema = new Schema(
  {
    month: String,
    revenue: {
      type: Number,
      currency: "USD",
      get: (v) => v / 100
    },
    expenses: {
      type: Number,
      currency: "USD",
      get: (v) => v / 100
    },
    operationalExpenses: {
      type: Number,
      currency: "USD",
      get: (v) => v / 100
    },
    nonOperationalExpenses: {
      type: Number,
      currency: "USD",
      get: (v) => v / 100
    }
  },
  { toJSON: { getters: true }} // to use 'get' property
)

const KPISchema = new Schema(
  {
    titalProfit: {
      type: Number,
      currency: "USD",
      get: (v) => v / 100, // mongoose currency is x100 so we need to do this
    },
    totalRevenue: {
      type: Number,
      currency: "USD",
      get: (v) => v / 100,
    },
    totalExpenses: {
      type: Number,
      currency: "USD",
      get: (v) => v / 100,
    },
    expensesByCategory: {
      type: Map,
      of: {
        type: Number,
        currency: "USD",
        get: (v) => v / 100,
      }
    },
    monthlyData: [monthSchema],
    dailyData: [dailySchema]
  },
  { timestamps: true, toJSON: { getters: true }} 
);

const KPI = mongoose.model("KPI", KPISchema);

export default KPI;