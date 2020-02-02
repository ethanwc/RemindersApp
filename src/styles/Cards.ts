import {Colors} from './Colors';

export const CategoryCard = {
  flexDirection: 'row',
  flex: 1,
  padding: 10,
  paddingTop: 20,
  paddingBottom: 120,
  marginTop: 5,
  marginLeft: 2.5,
  marginRight: 2.5,
  borderRadius: 5,
  borderWidth: 0.5,
  borderColor: Colors.dark,
};

export const TaskCard = {
  flexDirection: 'row',
  justifyContent: 'center',
  borderWidth: 0.5,
  borderColor: Colors.dark,
};

export const InfoCard = {
  flexDirection: 'row',
  justifyContent: 'center',
  borderWidth: 0.5,
  borderColor: Colors.dark,
};

export const ItemCard = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  flex: 1,
  padding: 5,
  marginTop: 5,
  borderBottomColor: Colors.orange,
  borderBottomWidth: 1,
  borderTopRadious: 25,
  borderColor: Colors.dark,
};

export const CreateCard = {
  position: 'absolute',
  width: 65,
  height: 65,
  backgroundColor: Colors.orange,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 100,
  right: 10,
  bottom: 10,
};
