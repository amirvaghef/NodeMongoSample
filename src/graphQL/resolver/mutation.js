const Mutation = {
  newCustomer: async (parent, args, contextValue) => {
    return await contextValue.Customer.create({
      name: args.customer.name,
      family: args.customer.family,
      nationalCode: args.customer.nationalCode,
      IdNo: args.customer.IdNo,
      childs: args.customer.childs,
    });
  },
  updateCustomer: async (parent, { customer }, contextValue) => {
    return await contextValue.Customer.findOneAndUpdate(
      { _id: customer._id },
      {
        $set: {
          name: customer.name,
          family: customer.family,
          nationalCode: customer.nationalCode,
          IdNo: customer.IdNo,
          childs: customer.childs,
        },
      },
      { new: true }
    );
  },
  deleteCustomer: async (parent, args, contextValue) => {
    try {
      await contextValue.Customer.findOneAndDelete({ _id: args.id });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
};

export default Mutation;
