import Navbar from './Navbar';
import useScrollQuery from '../../lib/useScrollQuery'
import routes, {cto} from '../../data/routes'

export default {
  title: 'Example/Navbar',
  component: Navbar,
};

const Template = (args) => {

  const scrolled = useScrollQuery(50)

  return(
    <div>
      <Navbar {...args} scrolled={scrolled}/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      text<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      text<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      text<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      text<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  )
}

export const Default = Template.bind({});
Default.args = {
  routes: [...routes, cto]
};