import ProductDetail from "@/components/ProductDetail";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const TabComponent = () => {
  return (

    <><ProductDetail /><Tabs defaultValue="description">
          <TabsList>
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="additional-info">Additional Info</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          <TabsContent value="description">
              <p>Your description content here.</p>
          </TabsContent>
          <TabsContent value="additional-info">
              <p>Additional Info content here.</p>
          </TabsContent>
          <TabsContent value="reviews">
              <p>Reviews content here.</p>
          </TabsContent>
          <TabsContent value="video">
              <p>Video content here.</p>
          </TabsContent>
      </Tabs></>
  );
};

export default TabComponent;