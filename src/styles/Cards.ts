import {Colors} from './Colors';

export const CategoryCard = {
  flexDirection: 'row',
  flex: 1,
  padding: 10,
  paddingTop: 20,
  paddingBottom: 120,
  marginTop: 7.5,
  marginHorizontal: 3.5,
  borderRadius: 4,
  borderWidth: .5,
  borderColor: Colors.four,
};

export const TaskCard = {
  flexDirection: 'row',
  justifyContent: 'center',
  borderWidth: 0.5,
  borderColor: Colors.five,
};

export const InfoCard = {
  flexDirection: 'row',
  justifyContent: 'center',
  borderWidth: 0.5,
  borderColor: Colors.two,
};

export const ItemCard = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: 5,
  marginTop: 5,
};

export const DetailedItemCard = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: 5,
  marginTop: 5,
  borderBottomColor: Colors.five,
  borderBottomWidth: 0.5,
  borderColor: Colors.one,
};

export const ItemCardTime = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 5,
  borderBottomColor: Colors.five,
  borderBottomWidth: 0.5,
  borderColor: Colors.one,
};

export const CreateCard = {
  position: 'absolute',
  width: 65,
  height: 65,
  backgroundColor: Colors.one,
  alignItems: 'center',
  justifyContent: 'center',
  borderTopLeftRadius: 35,
  right: 0,
  bottom: 0,
};

export const NewTaskCard = {
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
  borderColor: Colors.five,
};
