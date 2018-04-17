import { Get, Controller } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  root(): string {
    return 'Hello World! <script>window.opener.location="http://google.com"</script>';
  }
}
