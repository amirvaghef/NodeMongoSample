const Query = {
  customers: async (parent, args, contextValue) => {
    return await contextValue.Customer.find();
  },
  customer: async (parent, args, contextValue) => {
    console.log(args.id);
    return await contextValue.Customer.findById(args.id);
  },
};

export default Query;
